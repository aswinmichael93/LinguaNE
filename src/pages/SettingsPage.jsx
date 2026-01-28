import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';

function Toggle({ label, value, onChange }) {
    return (
        <label className="flex items-center justify-between cursor-pointer">
            <span className="text-gray-700">{label}</span>
            <input
                type="checkbox"
                checked={value}
                onChange={(e) => onChange(e.target.checked)}
                className="w-5 h-5"
            />
        </label>
    );
}

export default function SettingsPage() {
    const navigate = useNavigate();

    const [settings, setSettings] = useState({
        autoDetect: true,
        autoplayAudio: false,
        darkMode: false,
        highContrast: false,
        notifications: true
    });

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-6 max-w-4xl mx-auto">
            {/* Back */}
            <button
                onClick={() => navigate('/home')}
                className="text-orange-600 mb-6"
            >
                ← Back to Home
            </button>

            <h1 className="text-2xl font-bold mb-6">Settings</h1>

            {/* Language Settings */}
            <Card className="p-6 mb-6">
                <h2 className="font-semibold mb-4">Language Settings</h2>
                <Toggle
                    label="Auto-detect language"
                    value={settings.autoDetect}
                    onChange={(v) => setSettings({ ...settings, autoDetect: v })}
                />
            </Card>

            {/* Translator Behavior */}
            <Card className="p-6 mb-6">
                <h2 className="font-semibold mb-4">Translator Behavior</h2>
                <Toggle
                    label="Auto-play translated audio"
                    value={settings.autoplayAudio}
                    onChange={(v) => setSettings({ ...settings, autoplayAudio: v })}
                />
            </Card>

            {/* Accessibility */}
            <Card className="p-6 mb-6">
                <h2 className="font-semibold mb-4">Accessibility & UI</h2>
                <Toggle
                    label="Dark mode"
                    value={settings.darkMode}
                    onChange={(v) => setSettings({ ...settings, darkMode: v })}
                />
                <div className="mt-3">
                    <Toggle
                        label="High contrast mode"
                        value={settings.highContrast}
                        onChange={(v) => setSettings({ ...settings, highContrast: v })}
                    />
                </div>
            </Card>

            {/* Notifications */}
            <Card className="p-6 mb-6">
                <h2 className="font-semibold mb-4">Notifications</h2>
                <Toggle
                    label="Feedback & contribution updates"
                    value={settings.notifications}
                    onChange={(v) => setSettings({ ...settings, notifications: v })}
                />
            </Card>

            {/* Privacy */}
            <Card className="p-6 mb-6">
                <h2 className="font-semibold mb-4">Privacy & Data</h2>

                <button
                    className="text-red-600 text-sm"
                    onClick={() => alert('Clear history')}
                >
                    Clear translation history
                </button>

                <div className="mt-3">
                    <button
                        className="text-red-600 text-sm"
                        onClick={() => alert('Delete account')}
                    >
                        Delete account
                    </button>
                </div>
            </Card>
        </div>
    );
}

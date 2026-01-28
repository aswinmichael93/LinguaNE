import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function ProfilePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-6 max-w-4xl mx-auto">
            {/* Back */}
            <button
                onClick={() => navigate('/home')}
                className="text-orange-600 mb-6"
            >
                ← Back to Home
            </button>

            {/* Profile Overview */}
            <Card className="p-6 mb-6">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-3xl">
                        👤
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Guest User</h2>
                        <p className="text-gray-600">guest@linguane.app</p>

                        <p className="mt-2 text-sm text-gray-500">
                            Primary language pair: <strong>Hindi → English</strong>
                        </p>

                        <p className="italic text-sm text-gray-500 mt-1">
                            “Contributing to language preservation”
                        </p>

                        <p className="text-xs text-gray-400 mt-2">
                            Member since: April 2026
                        </p>
                    </div>
                </div>
            </Card>

            {/* Actions */}
            <Card className="p-6 space-y-4">
                <Button onClick={() => alert('Edit profile coming soon')}>
                    Edit Profile
                </Button>

                <Button
                    variant="secondary"
                    onClick={() => navigate('/settings')}
                >
                    Settings
                </Button>
            </Card>
        </div>
    );
}

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';

export default function CommunityImpactPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Simulate backend stats fetch
    setTimeout(() => {
      setStats({
        users: 1247,
        translations: 45678,
        languages: 12
      });
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-6">
      {/* Back */}
      <button
        onClick={() => navigate('/home')}
        className="text-orange-600 mb-6"
      >
        ← Back to Home
      </button>

      <h1 className="text-2xl font-bold mb-6">Community Impact</h1>

      {/* Loading */}
      {loading && (
        <p className="text-gray-500 text-center">
          Loading community impact...
        </p>
      )}

      {/* Stats */}
      {!loading && stats && (
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <Card className="p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-600">
              {stats.users.toLocaleString()}
            </h3>
            <p className="text-gray-600 mt-1">Users</p>
          </Card>

          <Card className="p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-600">
              {stats.translations.toLocaleString()}
            </h3>
            <p className="text-gray-600 mt-1">Translations</p>
          </Card>

          <Card className="p-6 text-center">
            <h3 className="text-3xl font-bold text-orange-600">
              {stats.languages}
            </h3>
            <p className="text-gray-600 mt-1">Languages</p>
          </Card>
        </div>
      )}

      {/* Info */}
      {!loading && (
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
          🌍 <strong>Real impact:</strong> Every contribution helps preserve
          endangered tribal languages for future generations.
        </div>
      )}
    </div>
  );
}

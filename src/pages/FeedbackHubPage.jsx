import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import StatusBadge from '../components/common/StatusBadge';
import Button from '../components/common/Button';

export default function FeedbackHubPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching feedback history
    setTimeout(() => {
      setItems([
        {
          id: 1,
          text: 'Corrected translation for Santali → Gondi',
          status: 'validated'
        },
        {
          id: 2,
          text: 'Pronunciation feedback submitted',
          status: 'pending'
        }
      ]);
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

      <h1 className="text-2xl font-bold mb-6">Feedback Hub</h1>

      {/* Loading */}
      {loading && (
        <p className="text-gray-500 text-center">
          Loading your contributions...
        </p>
      )}

      {/* Empty State */}
      {!loading && items.length === 0 && (
        <Card className="p-6 text-center text-gray-600">
          You haven’t submitted any feedback yet.
        </Card>
      )}

      {/* Feedback Items */}
      {!loading && items.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          {items.map((item) => (
            <Card
              key={item.id}
              className="flex items-center justify-between p-4"
            >
              <p className="text-gray-800">{item.text}</p>
              <StatusBadge status={item.status} />
            </Card>
          ))}
        </div>
      )}

      {/* Info */}
      {!loading && (
        <div className="mt-8 text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded-lg p-4">
          💡 <strong>Your feedback matters:</strong> Native speakers validate
          submissions to preserve cultural accuracy.
        </div>
      )}
    </div>
  );
}

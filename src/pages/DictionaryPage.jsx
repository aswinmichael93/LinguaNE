import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function DictionaryPage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);

    // Simulate dictionary lookup (replace with API later)
    setTimeout(() => {
      setResult({
        word: query,
        meaning: 'Sample meaning of the word.',
        example: 'Example usage of the word in a sentence.'
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-orange-50 px-6 py-6">
      {/* Back */}
      <button
        onClick={() => navigate('/home')}
        className="text-orange-600 mb-6"
      >
        ← Back to Home
      </button>

      <h1 className="text-2xl font-bold mb-6">Dictionary</h1>

      {/* Search Card */}
      <Card className="p-6 mb-6">
        <input
          className="w-full border rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Search a word..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Button
          className="w-full"
          disabled={!query || loading}
          onClick={handleSearch}
        >
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </Card>

      {/* Result */}
      {result && (
        <Card className="p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-2">
            {result.word}
          </h3>
          <p className="text-gray-700 mb-2">
            <strong>Meaning:</strong> {result.meaning}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Example:</strong> {result.example}
          </p>
        </Card>
      )}

      {/* Info */}
      {!result && !loading && (
        <p className="text-gray-500 text-sm mt-6 text-center">
          Search a word to see its meaning and usage.
        </p>
      )}
    </div>
  );
}

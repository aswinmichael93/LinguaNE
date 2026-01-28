import React from 'react';
import { Clock, Check, Sparkles, AlertCircle } from 'lucide-react';

const STATUS_MAP = {
  submitted: {
    label: 'Submitted',
    icon: Clock,
    className: 'bg-blue-100 text-blue-700'
  },
  validated: {
    label: 'Validated',
    icon: Check,
    className: 'bg-green-100 text-green-700'
  },
  applied: {
    label: 'Applied',
    icon: Sparkles,
    className: 'bg-purple-100 text-purple-700'
  },
  error: {
    label: 'Error',
    icon: AlertCircle,
    className: 'bg-red-100 text-red-700'
  }
};

export default function StatusBadge({ status = 'submitted' }) {
  const config = STATUS_MAP[status] || STATUS_MAP.submitted;
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${config.className}`}
    >
      <Icon size={14} />
      {config.label}
    </span>
  );
}

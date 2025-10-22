// app/verification/page.js
import VerificationStatus from '@/components/verification/VerificationStatus';

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <VerificationStatus />
    </div>
  );
}
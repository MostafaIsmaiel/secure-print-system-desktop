import { useState } from 'react';
import { Button } from '../features/shared/components/button';
import { PrintedCode } from '../features/printed-code/components';
import { Input } from '../features/shared/components/input';
import axios from 'axios';

export default function Generate() {
    const [userId, setUserId] = useState(
        '7ff0ad25-db3b-4890-ac29-fb66f52e2196',
    );
    const [printerId, setPrinterId] = useState(
        '11111111-2222-3333-4444-555555555555',
    );
    const [printedCode, setPrintedCode] = useState('');
    const [error, setError] = useState<string | null>(null);

    async function handleGenerate() {
        try {
            const res = await axios.post('http://localhost:3000/generate', {
                user_id: userId,
                printer_id: printerId,
            });
            const data = res.data;
            setPrintedCode(data.printed_code);
            setError(null);
        } catch {
            setError('Failed to generate printed code. Please try again.');
        }
    }

    return (
        <div className="mx-auto max-w-xl space-y-6">
            <h1 className="text-2xl font-bold">Generate Secure Print</h1>

            <Input
                placeholder="User ID"
                value={userId}
                onChange={e => setUserId(e.target.value)}
            />

            <Input
                placeholder="Printer ID"
                value={printerId}
                onChange={e => setPrinterId(e.target.value)}
            />

            <Button onClick={handleGenerate} className="w-full">
                Generate Code
            </Button>

            {printedCode && <PrintedCode code={printedCode} />}
            {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
    );
}

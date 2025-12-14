import { useState } from 'react';
import { Button } from '../features/shared/components/button';
import { Input } from '../features/shared/components/input';

export default function Verify() {
    const [code, setCode] = useState('');
    const [result, setResult] = useState<any>(null);

    async function handleVerify() {
        const res = await fetch('http://localhost:3000/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ printed_code: code }),
        });

        const data = await res.json();
        setResult(data);
    }

    return (
        <div className="mx-auto max-w-xl space-y-6">
            <h1 className="text-2xl font-bold">Verify Printed Code</h1>

            <Input
                placeholder="Paste printed code"
                value={code}
                onChange={e => setCode(e.target.value)}
            />

            <Button onClick={handleVerify} className="w-full">
                Verify
            </Button>

            {result && (
                <div
                    className={`mt-4 rounded-xl border p-4 ${
                        result.valid ? 'border-green-500' : 'border-red-500'
                    }`}
                >
                    <div className="font-semibold">{result.message}</div>

                    {result.valid && (
                        <div className="text-muted-foreground mt-2 text-sm">
                            <div>Employee: {result.data.employee}</div>
                            <div>Printer: {result.data.printer}</div>
                            <div>Printed at: {result.data.printed_at}</div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

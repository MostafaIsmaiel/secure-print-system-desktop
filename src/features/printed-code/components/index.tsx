interface PrintedCodeProps {
    code: string;
}

export function PrintedCode({ code }: PrintedCodeProps) {
    return (
        <div className="bg-muted mt-6 rounded-xl border p-6 text-center">
            <div className="text-muted-foreground mb-2 text-sm">
                Secure Print Code
            </div>

            <div className="text-2xl font-semibold tracking-widest select-all">
                {code}
            </div>

            <div className="text-muted-foreground mt-2 text-xs">
                Includes cryptographic hieroglyph signature
            </div>
        </div>
    );
}

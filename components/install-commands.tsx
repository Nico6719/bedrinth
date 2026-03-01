import { Terminal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

interface InstallCommandsProps {
  tooth: string;
  version: string;
  variant: string;
}

function buildInstallCommand(
  tooth: string,
  variant: string,
  version: string,
): string {
  if (variant === "") {
    return `lip install ${tooth}@${version}`;
  }
  return `lip install ${tooth}#${variant}@${version}`;
}

export function InstallCommands({
  tooth,
  version,
  variant,
}: InstallCommandsProps) {
  const command = buildInstallCommand(tooth, variant, version);
  const label = variant === "" ? "(default)" : variant;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Terminal className="w-4 h-4" />
          Install
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
            {label}
          </div>
          <div className="flex items-center gap-2 rounded-md bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-2">
            <code className="flex-1 text-sm font-mono text-gray-800 dark:text-gray-200 select-all overflow-x-auto whitespace-nowrap">
              {command}
            </code>
            <CopyButton text={command} className="shrink-0" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

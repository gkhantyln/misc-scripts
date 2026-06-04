# Simple backup script
param(
    [string]$Source,
    [string]$Destination
)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupPath = Join-Path $Destination "backup_$timestamp"

if (Test-Path $Source) {
    Copy-Item -Path $Source -Destination $backupPath -Recurse -Force
    Write-Host "Backup created: $backupPath"
} else {
    Write-Error "Source not found: $Source"
}

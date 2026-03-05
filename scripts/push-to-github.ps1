# Confluxe - Push to GitHub Script
# Run this AFTER you've created the repo on GitHub (see SETUP-GITHUB.md)

Write-Host "`n=== Confluxe: Pushing to GitHub ===" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path ".git")) {
    Write-Host "ERROR: Not in a Git repository. Run this from the confluxe_main folder." -ForegroundColor Red
    exit 1
}

# Step 1: Push main branch
Write-Host "Step 1: Pushing main branch to GitHub..." -ForegroundColor Yellow
git push -u origin main
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nPush failed. Make sure you:" -ForegroundColor Red
    Write-Host "  1. Created the repo at https://github.com/new (name: confluxe)" -ForegroundColor White
    Write-Host "  2. Left it empty (no README, no .gitignore)" -ForegroundColor White
    Write-Host "  3. Your remote URL is correct. Check with: git remote -v" -ForegroundColor White
    exit 1
}

Write-Host "`nMain branch pushed successfully!" -ForegroundColor Green

# Step 2: Create and push preview branch
Write-Host "`nStep 2: Creating and pushing preview branch..." -ForegroundColor Yellow
git checkout -b preview 2>$null
if ($LASTEXITCODE -ne 0) {
    # Branch might already exist
    git checkout preview
}
git push -u origin preview

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n=== All done! ===" -ForegroundColor Green
    Write-Host "Your code is now on GitHub." -ForegroundColor White
    Write-Host "Next: Go to Vercel > Domains > Add staging.confluxe.in (Preview)" -ForegroundColor Cyan
} else {
    Write-Host "`nPreview branch push failed. Main branch is fine - you can push preview later." -ForegroundColor Yellow
}

Write-Host ""

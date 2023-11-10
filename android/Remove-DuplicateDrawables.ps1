# Define the paths to the duplicate resources as reported by the build error
$duplicateFiles = @(
    "drawable-hdpi\node_modules_reactnavigation_elements_src_assets_backicon.png",
    "drawable-mdpi\node_modules_reactnavigation_elements_src_assets_backicon.png",
    "drawable-mdpi\node_modules_reactnavigation_elements_src_assets_backiconmask.png",
    "drawable-xhdpi\node_modules_reactnavigation_elements_src_assets_backicon.png",
    "drawable-xxhdpi\node_modules_reactnavigation_elements_src_assets_backicon.png",
    "drawable-xxxhdpi\node_modules_reactnavigation_elements_src_assets_backicon.png"
)

# Navigate to the res directory
Push-Location .\app\src\main\res

# Iterate over each file and remove it if it exists
foreach ($file in $duplicateFiles) {
    if (Test-Path $file) {
        # Remove the file and report it
        Remove-Item $file -Force
        Write-Host "Removed duplicate file: $file"
    }
    else {
        Write-Host "No duplicate found for: $file"
    }
}

# Return to the original directory
Pop-Location

# Output completion message
Write-Host "Duplicate removal process completed."

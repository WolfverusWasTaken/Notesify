document.getElementById('mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('light-mode', this.checked);
});


document.addEventListener('DOMContentLoaded', () => {
    const uploadArea = document.getElementById('upload-area');
    const fileInput = document.getElementById('pdf-upload');
    const fileNameDisplay = document.getElementById('file-name');
    const modeToggle = document.getElementById('mode-toggle');

    // Click event to open the file input
    uploadArea.addEventListener('click', function() {
        fileInput.click(); // Trigger file input click
    });

    // Drag over event
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault(); // Prevent default behavior
        uploadArea.classList.add('dragging'); // Optional: add a class for styling
    });

    // Drag leave event
    uploadArea.addEventListener('dragleave', function() {
        uploadArea.classList.remove('dragging'); // Remove dragging class
    });

    // Drop event
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault(); // Prevent default behavior
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files; // Set the files to the input
            const fileName = files[0].name; // Get the file name
            fileNameDisplay.textContent = `Selected file: ${fileName}`; // Display the file name
        }
        uploadArea.classList.remove('dragging'); // Remove dragging class after drop
    });

    // Display the selected file name when file input changes
    fileInput.addEventListener('change', function() {
        const fileName = this.files[0] ? this.files[0].name : 'No file selected';
        fileNameDisplay.textContent = `Selected file: ${fileName}`; // Update the displayed file name
    });

    // Theme toggle functionality
    modeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode'); // Toggle dark mode
        document.body.classList.toggle('light-mode'); // Toggle light mode
    });
});

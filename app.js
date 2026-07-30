document.addEventListener('DOMContentLoaded', function() {
    // Simulate pipeline status
    const statusElement = document.getElementById('pipeline-status');
    
    // Show different statuses
    const statuses = [
        { text: '✅ Build: Passed', color: '#28a745' },
        { text: '✅ Tests: Passed', color: '#28a745' },
        { text: '✅ Lint: Passed', color: '#28a745' },
        { text: '🚀 Deployment: Ready', color: '#667eea' }
    ];
    
    let index = 0;
    
    function updateStatus() {
        if (index < statuses.length) {
            statusElement.textContent = statuses[index].text;
            statusElement.style.backgroundColor = statuses[index].color + '20';
            statusElement.style.color = statuses[index].color;
            index++;
            setTimeout(updateStatus, 1000);
        }
    }
    
    // Start status updates
    setTimeout(updateStatus, 500);
    
    // Update version from package.json (simulated)
    document.getElementById('version').textContent = 'v1.0.0';
    
    console.log('DevOps Learning App loaded success!');
});
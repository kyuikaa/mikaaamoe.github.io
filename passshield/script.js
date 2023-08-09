// Load data from JSON file
fetch('https://raw.githubusercontent.com/thisrealhymika/thisrealhymika/main/fecthData.json')
  .then(response => response.json())
  .then(data => {
    const desktopButton = document.getElementById('download-desktop');
    const mobileButton = document.getElementById('download-mobile');
    const tabletButton = document.getElementById('download-tablet');

    desktopButton.textContent = `Download for Desktop (${data.desktopVersion})`;
    mobileButton.textContent = `Download for Mobile (${data.mobileVersion})`;
    tabletButton.textContent = `Download for Tablet (${data.tabletVersion})`;

    desktopButton.href = data.desktopDownloadLink;
    mobileButton.href = data.mobileDownloadLink;
    tabletButton.href = data.tabletDownloadLink;
  })
  .catch(error => console.error('Error fetching data:', error));

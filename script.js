function goToLibrary(type) {
  if (type === 'narration') {
    window.location.href = 'library.html';
  } else if (type === 'webtoon') {
    window.location.href = 'webtoon.html';
  } else if (type === 'socmed') {
    window.location.href = 'socmed.html';
  } else if (type === 'games') {
    window.location.href = 'games.html';
  }
  else if (type === 'sf') {
    window.location.href = 'sf.html';
  }
  else if (type === 'tbi') {
    window.location.href = 'tbi.html';
  }
  else if (type === 'nals') {
    window.location.href = 'nals.html';
  }
  else if (type === 'fluenesia') {
    window.location.href = 'fluenesia.html';
  }
}

function openLink(url) {
  window.open(url, '_blank');
}

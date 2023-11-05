document.getElementById("playentry").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, { url: "https://www.playentry.org" });
  });
});
document.getElementById("notice").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://playentry.org/community/notice/list/1?sort=created&term=all",
    });
  });
});
document.getElementById("story").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://playentry.org/community/entrystory/list?sort=created&term=all",
    });
  });
});
document.getElementById("tip").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://playentry.org/community/tips/list?sort=created&term=all",
    });
  });
});
document.getElementById("question").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://playentry.org/community/qna/list/1?sort=created&term=all",
    });
  });
});
document.getElementById("popular").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://playentry.org/project/list/popular?sort=ranked&term=all",
    });
  });
});
document.getElementById("great").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://playentry.org/project/list/staffpick?sort=staffPicked&term=all",
    });
  });
});
document.getElementById("make").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, { url: "https://playentry.org/ws/new" });
  });
});
document.getElementById("github").addEventListener("click", function () {
  // 원하는 URL로 이동하도록 코드를 작성합니다.
  // 예를 들어, 구글 홈페이지로 이동하는 코드는 다음과 같습니다.
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.update(tabs[0].id, {
      url: "https://entrygithub--lunarcask.repl.co/",
    });
  });
});

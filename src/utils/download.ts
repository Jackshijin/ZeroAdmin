/**
 * 下载文件
 * @param url 目标文件地址
 * @param fileName 保存的文件名称
 */
export function fileDownload(url: string, fileName: string) {
  getBlob(url, function (blob) {
    saveAs(blob, fileName);
  });
}

function getBlob(url: string, cb: Function) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function () {
    if (xhr.status === 200) {
      cb(xhr.response);
    }
  };
  xhr.send();
}

function saveAs(blob, fileName: string) {
  const nav = window.navigator as any;
  if (nav.msSaveOrOpenBlob) {
    nav.msSaveBlob(blob, fileName);
  } else {
    const link = document.createElement("a");
    const body = document.querySelector("body");

    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = "none";
    body.appendChild(link);
    link.click();
    body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  }
}

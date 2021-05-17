
interface VsCode {
  postMessage(message: any): void
}

declare let acquireVsCodeApi: Function

const vscode = (() => {
  if (self.navigator.userAgent.includes('Electron')) {
    return acquireVsCodeApi();
  }

  return {
    postMessage () {
      console.warn('木有')
    }
  };
})() as VsCode

export default function vscodePostMessage(data: any) {
  vscode.postMessage(data)
}

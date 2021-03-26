async function* streamAsyncIterator(stream) {
    const reader = stream.getReader();
    try {
      while (true) {
        const {done, value} = await reader.read();
        if(done) {
          return void 0;
        }
        yield value;
      }
    }
    finally {
      reader.releaseLock();
    }
  }

export default async function loadReadme() {
  fetch('./README.md').then(async (response) => {
    const taskContent = [];
    for await (const chunk of streamAsyncIterator(response.body)) {
        const translatedChunk = [];
        for(const charCode of chunk) {
            translatedChunk.push(String.fromCharCode(charCode));
        }
        taskContent.push(...translatedChunk);
    }
    document.querySelector('#task-content').innerHTML = marked(taskContent.join(''));
  });
} 
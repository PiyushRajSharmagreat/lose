

addEventListener("load",async ()=>{
  let sw = await navigator.serviceWorker.register("/service-worker.js")
})

async function subscribe() {
  let sw  = await navigator.serviceWorker.ready
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey : "BPN4TRRiVwfzfamCK1-VVBvxiy4uQRf4_RvmGFHuQdd0GSW5pPM6CpIjhGZrbubuddCoHwdOk-5WgHzu0njlAiw"
  })

  console.log(JSON.stringify(push))
}

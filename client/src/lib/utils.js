export function formatToTimeAgo(data) {
  const formatter =new Intl.RelativeTimeFormat("ko")
  const time = new Date(data).getTime();
  const now = new Date().getTime();
  const diff = time - now;

  if(Math.abs(diff)<1000*60*60){
    const diffMinutes =math.ceil(diff/(1000*60))
    return
  }
}

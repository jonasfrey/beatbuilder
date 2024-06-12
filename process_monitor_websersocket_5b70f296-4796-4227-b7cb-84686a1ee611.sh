pid_websersocket=$(pgrep -f "websersocket_5b70f296-4796-4227-b7cb-84686a1ee611.js")
watch -n 1 ps -p $pid_websersocket -o pid,etime,%cpu,%mem,cmd
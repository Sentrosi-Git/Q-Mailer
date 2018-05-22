function localtunnel {
  lt --port 5000 --subdomain qmailer
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done

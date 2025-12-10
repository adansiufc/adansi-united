#!/bin/bash

# Load environment variables from .env.local
if [ -f .env.local ]; then
    export $(grep -v '^#' .env.local | xargs)
fi

# Check if credentials are set
if [ -z "$NEXT_PUBLIC_ORCHARD_CLIENT_TOKEN" ] || [ -z "$NEXT_PUBLIC_ORCHARD_CLIENT_SECRET" ]; then
    echo "Error: Credentials not found in .env.local file."
    echo "Please ensure NEXT_PUBLIC_ORCHARD_CLIENT_TOKEN and NEXT_PUBLIC_ORCHARD_CLIENT_SECRET are set."
    exit 1
fi

# Assign variables
CLIENT_ID="$NEXT_PUBLIC_ORCHARD_CLIENT_TOKEN"
CLIENT_SECRET="$NEXT_PUBLIC_ORCHARD_CLIENT_SECRET"
SERVICE_ID="4904"
TIMESTAMP=$(date -u +"%Y-%m-%d %H:%M:%S")

# Construct the JSON payload
JSON_PAYLOAD=$(cat <<EOF
{"service_id":"$SERVICE_ID","trans_type":"BLC","ts":"$TIMESTAMP"}
EOF
)

# Generate the HMAC-SHA256 signature
SIGNATURE=$(echo -n "$JSON_PAYLOAD" | openssl dgst -sha256 -hmac "$CLIENT_SECRET" -binary | hexdump -v -e '/1 "%02x"')

# Construct the Authorization header
AUTH_HEADER="Authorization: $CLIENT_ID:$SIGNATURE"

# Print the details for debugging
echo "-------------------------------------"
echo "Endpoint: https://orchard-api.anmgw.com/check_wallet_balance"
echo "Timestamp: $TIMESTAMP"
echo "Client ID: $CLIENT_ID"
echo "Payload: $JSON_PAYLOAD"
echo "Signature: $SIGNATURE"
echo "-------------------------------------"
echo "Executing curl command..."
echo "-------------------------------------"

# Execute the curl command
curl https://orchard-api.anmgw.com/check_wallet_balance \
-H "$AUTH_HEADER" \
-H "Content-Type: application/json" \
-X POST \
-d "$JSON_PAYLOAD"

echo ""
echo "-------------------------------------"
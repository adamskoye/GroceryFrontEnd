#!/bin/bash

token="$(curl --request POST \
  -s \
  --url https://adamknight.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"7u158zFUE4ArSFWZozFiUxECShiVpg69","client_secret":"QjuLQ77CRRd10HYPE5SLWACzfnPzxDD5ZfAusZ8M9vXkqXDUqC3sApwbz90tIt59","audience":"https://adamknight.us.auth0.com/api/v2/","grant_type":"client_credentials"}' \
  | jq -r .access_token)"

  #echo "${token}"

  curl --header "Authorization: bearer ${token}" https://adamknight.us.auth0.com/api/v2/users
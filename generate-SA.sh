#!/bin/bash

SA_NAME=apigee-cicd-pipeline-sa

gcloud iam service-accounts create $SA_NAME --display-name="Apigee CICD Pipeline Service Account"

PROJECT_ID=$(gcloud config get-value project)
AZURE_SA=$SA_NAME@$PROJECT_ID.iam.gserviceaccount.com

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$AZURE_SA" \
  --role="roles/apigee.environmentAdmin"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$AZURE_SA" \
  --role="roles/apigee.apiAdmin"

gcloud iam service-accounts keys create $SA_NAME-key.json --iam-account=$AZURE_SA --key-file-type=json 

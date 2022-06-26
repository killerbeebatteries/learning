# Summary
Playing around with packer and ansible to automate the building of GCP compatiable images to be used by Jenkins nodes.

# References
* https://medium.com/@ayebian16295/building-custom-machine-images-with-ansible-and-packer-on-gcp-ce69d8f0315b
* https://learn.hashicorp.com/tutorials/packer/docker-get-started-build-image
* https://www.packer.io/plugins/builders/googlecompute
* https://cloud.google.com/build/docs/building/build-vm-images-with-packer

# Setup

## local machine

### packages
```
sudo apt install ansible
sudo apt install packer
```

### cloud config

```
gcloud auth application-default login

gcloud services enable sourcerepo.googleapis.com
gcloud services enable compute.googleapis.com
gcloud services enable servicemanagement.googleapis.com
gcloud services enable storage-api.googleapis.com

```
*NOTE:* I did have to go into https://console.cloud.google.com and enable the Cloud Builder API for the project. Before that the ansible provisioning component was denied access to the target instance.

# Build

## Legacy

You don't have to wait long for these tools to change. Using the original method of building with a json template is now considered legacy:
* https://www.packer.io/docs/templates/legacy_json_templates

You can also use the GCP Cloud builder to achieve this apparently (which I think is just the same thing, just using a different approach).

### Run

```
cd legacy/image_build/packer
export PROJECT_ID=<my_gcp_project_id_here>
packer build packer.json
```
You should see the image show up in Compute Engine -> Storage -> Images.

## HCL

HCL templates FTW.

### Run

```
cd hcl/image_build/packer
packer build -var 'project_name=<my_gcp_project_id_here>' -var "image_name=jenkins-agent-$(date '+%Y%m%d')" config.pkr.hcl
```

You should see the image show up in Compute Engine -> Storage -> Images.

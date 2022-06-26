variable "project_name" {
	type = string
}

variable "image_name" {
	type = string
}

source "googlecompute" "jenkins-agent" {
	project_id = var.project_name
	source_image_family = "debian-11"
	image_name = var.image_name
	ssh_username = "packer"
	zone = "australia-southeast1-a"
}

source "vagrant" "jenkins-agent" {
  communicator = "ssh"
  source_path = "hashicorp/precise64"
  provider = "virtualbox"
  add_force = true
}
 
build {
	sources = [
		"sources.googlecompute.jenkins-agent",
		"sources.vagrant.jenkins-agent"
	]

	provisioner "ansible" {
		playbook_file = "../../ansible/site.yml"
	}
}

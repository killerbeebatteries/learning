variable "image_name" {
    type = string
}

resource "google_compute_instance_template" "default" {
  name        = var.image_name
  description = "This template is used to create Jenkins agent instances."

  tags = ["ci", "jenkins-agent"]

  labels = {
    environment = "dev"
  }

  instance_description = "A merry Jenkins node."
  machine_type         = "e2-medium"
  can_ip_forward       = false

  // Use an existing disk resource
  disk {
    // Instance Templates reference disks by name, not self link
    source      = join("", [ "google_compute_disk.", var.image_name ])
    auto_delete = true
    boot        = true
  }

  network_interface {
    network = "default"
  }

  metadata = {
    tools = "jenkins"
  }
}

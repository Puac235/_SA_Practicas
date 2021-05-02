provider "google" {
    credentials = file("practica11-201700342-8432619685f6.json")
    project = "practica11-201700342"
    region = "us-west-1"
}

resource "random_id" "instance_id" {
  byte_length = 8
}

// crear la VM
resource "google_compute_instance" "default" {
  name = "terraform-201700342-${random_id.instance_id.hex}"
  machine_type = "f1-micro"
  zone = "us-central1-a"

  boot_disk {
    initialize_params{
        image = "debian-cloud/debian-9" 
    }
  }

  metadata_startup_script = "sudo apt-get update; sudo apt-get install -yq build-essential python python3-pip rsync; pip3 install flask"

  network_interface {
    network = "default"

    access_config {
        //leer la ip publica

    }
  }

  metadata = {
    ssh-keys = "josef:${file("gcloud-ssh-vm.pub")}"
  }
}

resource "google_compute_firewall" "default" {
  name = "terraform-201700342-python-5000"
  network = "default"
  allow {
    protocol = "tcp"
    ports = ["5000"]
  }
}

output "ip" {
    value = google_compute_instance.default.network_interface.0.access_config.0.nat_ip
}
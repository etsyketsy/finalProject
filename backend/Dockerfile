FROM continuumio/miniconda:4.4.10

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get install -qqy \
    wget \
    bzip2 \
    libssl-dev \
    openssh-server

RUN apt-get autoremove -y

# SSH Server
RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i '/PermitRootLogin/c\PermitRootLogin yes' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile


RUN mkdir -p /project | \
    mkdir -p /media-files | \
    mkdir -p /static-files

COPY ./project/requirements.yml /project/requirements.yml

RUN conda env create -f /project/requirements.yml

ENV PATH /opt/conda/envs/project/bin:$PATH
RUN sed '$ a source activate project' -i /root/.bashrc

COPY ./project /project
COPY ./scripts /scripts
RUN chmod +x /scripts/*

WORKDIR /project

EXPOSE 8000
EXPOSE 22

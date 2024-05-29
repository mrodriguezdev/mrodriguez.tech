---
title: Instalación JDK en Ubuntu
excerpt: Domina la instalación del JDK en Ubuntu con esta guía paso a paso. Desde la descarga hasta la configuración de las variables de entorno, te guiaré a través de cada paso para que puedas comenzar a desarrollar en Java sin problemas. 
publishDate: 2024-05-29
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'El logotipo completo de Astro.'
tags: ["Guías y Procesos"]
---
## **Descarga del JDK**

1. Visitar la página oficial de Oracle para descargar el JDK necesario.
    
    [Download the Latest Java LTS Free](https://www.oracle.com/java/technologies/downloads/)
    

<aside>
💡 **Nota**: Los siguientes pasos varían según el tipo de archivo que se haya descargado, ya sea un instalador **`.deb`** o un archivo comprimido **`.tar`**.

</aside>

## Instalación con archivo  **`.deb`**

### Método 1: Instalación usando la Interfaz Gráfica

1. Navegar hasta el directorio donde se encuentra el archivo **`.deb`**.
2. Hacer clic derecho sobre el archivo.
3. Seleccionar “**Abrir con otras aplicaciones”**.
4. Elegir **“Instalador de software”** y seguir las instrucciones para completar la instalación.

### Método 2: Instalación usando la Terminal

1. Abrir una terminal.
2. Navegar hasta el directorio donde se tiene descargado el archivo **`.deb.`**
    
    ```bash
    cd /ruta/del/directorio
    ```
    
3. Ejecutar el siguiente comando para instalar el paquete.
    
    ```bash
    sudo dpkg -i nombre_del_paquete.deb
    ```
    
4. Si **`dpkg`** encuentra dependencias restantes, ejecutar el siguiente comando para corregirlas.
    
    ```bash
    sudo apt-get install -f
    ```
    

## Instalación con archivo **`.tar`**

### Método 1: Extracción e instalación

1. Abrir una terminal.
2. Navegar hasta el directorio donde se tiene descargado el archivo **`.tar`.**
3. Crear un directorio en la ruta **`/opt`** llamado **`jvm`  con el siguiente comando.**
    
    ```bash
    sudo mkdir /opt/jvm/
    ```
    
4. Extraer el contenido del archivo  **`.tar`** en el nuevo directorio.
    
    ```bash
    sudo tar -xvf nombre_del_paquete.tar -C /opt/jvm/
    ```
    

## **Configuración de las Variables de Entorno**

La configuración de las variables de entorno dependerá de la ruta de instalación del JDK. Se puede realizar esta configuración en el archivo **`.profile`** para que se aplique al iniciar sesión del usuario, o en el archivo **`.bashrc`** para que se aplique cada vez que se abra una nueva terminal.

1. Editar el archivo de configuración.
    - Para que se cargue al iniciar sesión del usuario, editar el archivo **`.profile.`**
    
    ```bash
    nano ~/.profile
    ```
    
    - Para que se cargue cada vez que se abra una terminal, editar el archivo **`.bashrc.`**
    
    ```bash
    nano ~/.bashrc
    ```
    
2. Agregar las variables de entorno.
    - Si se instalo el JDK desde un archivo **`.deb`**, añadir las siguientes líneas:
    
    ```bash
    export JAVA_HOME=/usr/lib/jvm/nombre_del_jdk
    export PATH=$PATH:$JAVA_HOME/bin
    ```
    
    - Si se instalo el JDK desde un archivo **`.tar`**, añadir las siguientes líneas.
    
    ```bash
    export JAVA_HOME=/opt/jvm/nombre_del_jdk
    export PATH=$PATH:$JAVA_HOME/bin
    ```
    
3. Guardar y cerrar el archivo. Presionar **`Ctrl + X`**, luego **`Y`** y **`Enter`**.
4. Recargar el archivo de configuración.
    - Para **`.profile` .**
    
    ```bash
    source ~/.profile
    ```
    
    - Para `.**bashrc` .**
    
    ```bash
    source ~/.bashrc
    ```
    
5. Verificar que se haya instalado correctamente.
    
    ```bash
    java --version
    ```
    
    **Ejemplo de salida al ejecutar ese comando.**
    
    ```bash
    java 17.0.10 2024-01-16 LTS
    Java(TM) SE Runtime Environment (build 17.0.10+11-LTS-240)
    Java HotSpot(TM) 64-Bit Server VM (build 17.0.10+11-LTS-240, mixed mode, sharing)
    ```
# CitasMedicasFront
# Sistema de Citas Médicas para ECI Salud Vital

## Arquitectura del Proyecto

El sistema sigue una arquitectura de microservicios con:

- **Frontend**: Aplicación React que consume la API REST
- **Backend**: Servicio Spring Boot con:
  - Controladores REST
  - Servicios de negocio
  - Repositorio MongoDB
- **Base de datos**: MongoDB (implementado con Cosmos DB en Azure)

## Tecnologías Utilizadas

- Backend:
  - Java 17
  - Spring Boot 3.x
  - Spring Data MongoDB
  - Maven
  - JUnit 5 + Mockito para pruebas
- Frontend:
  - React 18
  - Axios para llamadas HTTP
  - Bootstrap para estilos
- DevOps:
  - GitHub Actions para CI/CD
  - Azure App Service para despliegue
  - Azure Cosmos DB (MongoDB API)

## Cómo Ejecutar el Proyecto

### Frontend

1. Clonar el repositorio
2. Ejecutar index.html

Creación de proyecto Front Maven con Spring Boot
![image](https://github.com/user-attachments/assets/a3e63c37-93a2-4e8d-972d-33104b59ed64)


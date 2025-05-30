# Use the official Python image from the Docker Hub
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt /app/

# Install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the project files
COPY . /app/

# Expose the port the app runs on
EXPOSE 8000

# Install Redis
RUN apt-get update && apt-get install -y redis-server


USER 1000

# Run the application
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "cranesmedics.wsgi:application"]

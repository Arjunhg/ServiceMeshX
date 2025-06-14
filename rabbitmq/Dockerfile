FROM rabbitmq:3-management

# Expose the main port and management interface
EXPOSE 5672 15672

# Set environment variables
ENV RABBITMQ_DEFAULT_USER=guest
ENV RABBITMQ_DEFAULT_PASS=guest

# The container will automatically start RabbitMQ server
CMD ["rabbitmq-server"] 
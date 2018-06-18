FROM node:carbon

RUN useradd --user-group --create-home --shell /bin/false appuser

COPY . /home/appuser/eldoc-analytics

WORKDIR /home/appuser/eldoc-analytics

ARG VERSION_ENV
ARG ENVIRONMENT_ENV
ARG SECRETKEYCRIPT_ENV
ARG SERVER_HOST_ENV
ARG SERVER_PORT_ENV
ARG FRONT_HOST_ENV
ARG FRONT_PORT_ENV
ARG DATABASE_HOST_ENV
ARG DATABASE_DBNAME_ENV
ARG DATABASE_USR_ENV
ARG DATABASE_PSW_ENV
ARG BACK_PROTOCOLO_ENV
ARG BACK_HOST_ENV
ARG BACK_PORT_ENV

RUN sed -e 's/VERSION_ENV/'${BACK_VERSION_ENV}'/g' \
        -e 's/ENVIRONMENT_ENV/'${BACK_ENVIRONMENT_ENV}'/g' \
        -e 's/SECRETKEYCRIPT_ENV/'${BACK_SECRETKEYCRIPT_ENV}'/g' \
        -e 's/SERVER_HOST_ENV/'${BACK_SERVER_HOST_ENV}'/g' \
        -e 's/SERVER_PORT_ENV/'${BACK_SERVER_PORT_ENV}'/g' \
	-e 's/FRONT_HOST_ENV/'${BACK_FRONT_HOST_ENV}'/g' \
	-e 's/FRONT_PORT_ENV/'${BACK_FRONT_PORT_ENV}'/g' \
	-e 's/DATABASE_HOST_ENV/'${BACK_DATABASE_HOST_ENV}'/g' \
	-e 's/DATABASE_DBNAME_ENV/'${BACK_DATABASE_DBNAME_ENV}'/g' \
	-e 's/DATABASE_USR_ENV/'${BACK_DATABASE_USR_ENV}'/g' \
	-e 's/DATABASE_PSW_ENV/'${BACK_DATABASE_PSW_ENV}'/g' ci/.env.template > backend/server/config/env/.env.ts && \
    sed -e 's/BACK_PROTOCOLO_ENV/'${BACK_PROTOCOLO_ENV}'/g' \
        -e 's/BACK_HOST_ENV/'${BACK_HOST_ENV}'/g' \
        -e 's/BACK_PORT_ENV/'${BACK_PORT_ENV}'/g' ci/config.jsx.template > frontend/src/config/config.jsx


RUN chown -R appuser. /home/appuser

USER appuser

WORKDIR /home/appuser/eldoc-analytics/backend

RUN npm install \
    && npm run build \
    && cd ../frontend \
    && npm install \
    && npm run build

CMD ["npm","run","start"]

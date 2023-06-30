FROM ghcr.io/nodecg/nodecg:latest

# RUN nodecg install cma2819/some-dependency
COPY --chown=nodecg:nodecg ./ /opt/nodecg/bundles/ajr-elimination-layouts

CMD ["nodecg", "start"]
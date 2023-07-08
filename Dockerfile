FROM ghcr.io/nodecg/nodecg:latest

USER nodecg

COPY --chown=nodecg:nodecg ./ /opt/nodecg/bundles/ajr-elimination-layouts

CMD ["nodecg", "start"]
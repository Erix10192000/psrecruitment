#!/bin/bash
dirname=$PWD
SERVICE_NAME="${dirname%"${dirname##*[!/]}"}" 	# extglob-free multi-trailing-/ trim
SERVICE_NAME="${SERVICE_NAME##*/}"              # remove everything before the last /
IMAGE_TAG=`git rev-parse --short=6 HEAD`        # retrive tag to specified git tag
IMAGE_PREFIX="reg.paradise-soft.com.tw:5000/"   # this vary with different project name
IMAGE_NAME="$IMAGE_PREFIX$SERVICE_NAME:$IMAGE_TAG"

HELP_DOC='
    >$ ./helper.sh [param]
    (
      param:
        <build> : build docker image with name `project_name/folder_name:git_commit_tag`.
        <push>  : push docker images `project_name/folder_name:git_commit_tag` to registry.
    )
'

function docker_build() {
    docker build --build-arg gitTag=$IMAGE_TAG -t $IMAGE_NAME .
    if [ $? != 0 ];then
        echo "fail to build..."
        exit 1
    fi
    echo 'build success'
}


function docker_push() {
    docker push $IMAGE_NAME
    if [ $? != 0 ];then
        echo "fail to push..."
        exit 1
    fi
    echo 'push success'
}

function docker_remove() {
    docker rmi $IMAGE_NAME
    if [ $? != 0 ];then
        echo "fail to push..."
        exit 1
    fi
    echo 'push success'
}


function help() {
    echo $HELP_DOC
}


if [ "$1" == "build" ]; then
    docker_build
elif 
    [ "$1" == "push" ]; then
    docker_push
elif 
    [ "$1" == "remove" ]; then
    docker_remove
else
    help
fi
#!/bin/bash
set -e
set -u

if [ -e ./firmadyne.config ]; then
source ./firmadyne.config
elif [ -e ../firmadyne.config ]; then
source ../firmadyne.config
else
echo "Error: Could not find 'firmadyne.config'!"
exit 1
fi

if check_number $1; then
echo "Usage: run.mipseb.interactive.sh <image ID>"
exit 1
fi
IID=${1}

WORK_DIR=`get_scratch ${IID}`
IMAGE=`get_fs ${IID}`
KERNEL=`get_kernel "mipseb"`

qemu-system-mips -m 256 -M malta -kernel ${KERNEL} -drive if=ide,format=raw,file=${IMAGE} -append "firmadyne.syscall=1 root=/dev/sda1 console=ttyS0 nandsim.parts=64,64,64,64,64,64,64,64,64,64 rdinit=/firmadyne/preInit.shrw debug ignore_loglevel print-fatal-signals=1" -serial stdio -monitor none -display none -nographic -net none

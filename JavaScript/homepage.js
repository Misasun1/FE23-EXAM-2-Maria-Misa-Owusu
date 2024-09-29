// sweet alert connection to button subscribe

const submitClick = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      showConfirmButton: true,
      timer: 2500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "💕Thank you for signing in 💕",
    });
  };

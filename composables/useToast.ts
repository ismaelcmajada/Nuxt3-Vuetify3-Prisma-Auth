export default function useToast() {
    const toast = ref(false)
    const message = ref('')
    const color = ref('')

    const showToast = (msg: string, clr = 'success') => {
        message.value = msg
        color.value = clr
        toast.value = true
    }

    return {
        toast,
        message,
        color,
        showToast,
    }
}





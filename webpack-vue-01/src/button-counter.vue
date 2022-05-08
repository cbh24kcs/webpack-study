<template>
    <button v-on:click="count++">你点了我 {{ count }} 次</button>
</template>

<script>
export default {
    data: function () {
        return {
            count: 0
        }
    }
}
</script>

<template>
    <div class="video-container">
        <iframe
            width="960"
            height="715"
            src="https://www.youtube.com/embed/GlnZoMZ7z2g"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script>
export default {
    name: 'MyVideo',
};
</script>
<style scoped>
.video-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 30px;
}
</style>
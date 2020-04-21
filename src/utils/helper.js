export const formatAlbumArtImageUrl = (item) => {
    if (item && item.imageUrl) {
        return {
            image: `url(${item.imageUrl})`,
            size: 'contain',
            repeat: 'no-repeat',
            dark: true,
            position: 'top',
        };
    }

    return 'light-2';
};


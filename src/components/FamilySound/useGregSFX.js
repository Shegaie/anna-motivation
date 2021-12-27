import useSound from "use-sound";
import sfx1Path from "../../assets/SFX/gregSFX/lets-gowww.ogg";
import sfx2Path from "../../assets/SFX/gregSFX/deep-as-shit.ogg";
import sfx3Path from "../../assets/SFX/gregSFX/prend-une-pause.ogg";
import sfx4Path from "../../assets/SFX/gregSFX/yeah.ogg";
import sfx5Path from "../../assets/SFX/gregSFX/rien-ne-tai-impossible.ogg";
import sfx6Path from "../../assets/SFX/gregSFX/tu-peux-le-faire.ogg";

export function useGregSFX() {
    const [sfx1] = useSound(sfx1Path);
    const [sfx2] = useSound(sfx2Path);
    const [sfx3] = useSound(sfx3Path);
    const [sfx4] = useSound(sfx4Path);
    const [sfx5] = useSound(sfx5Path);
    const [sfx6] = useSound(sfx6Path);
    return [sfx1, sfx2, sfx3, sfx4, sfx5, sfx6];
}
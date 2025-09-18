#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = (gl_FragCoord.xy - u_resolution * .5) / u_resolution.yy + 0.5;

    float t = u_time * 0.8;
    float n = 12.;
    float cAnim = sin(u_time * 0.25);

    vec3 c1 = vec3(0.0);
    vec3 c2 = vec3(0.29 + cAnim, 0.50 - cAnim, 0.68 + cAnim);
    float wave = fract(sin(uv.x * n + t) + uv.y * n + sin(t * .5));

    vec3 color = vec3(wave, uv.y, 0.75);
    color *= mix(c1, c2, vec3(wave));

    gl_FragColor = vec4(color, 0.85);
}

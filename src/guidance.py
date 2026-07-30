guidance = {

    "Fire": """
🔥 FIRE EMERGENCY

1. Evacuate the building immediately.
2. Call Fire Department (101).
3. Stay low to avoid smoke.
4. Do NOT use elevators.
5. Cover your nose with a wet cloth.
6. Move to a safe open area.
""",

    "Flood": """
🌊 FLOOD EMERGENCY

1. Move immediately to higher ground.
2. Avoid walking or driving through flood water.
3. Switch off electricity and gas supply if safe.
4. Stay away from rivers, drains and bridges.
5. Contact local rescue authorities if trapped.
""",

    "Earthquake": """
🌍 EARTHQUAKE EMERGENCY

1. Drop, Cover and Hold.
2. Stay away from windows and glass.
3. Do NOT use elevators.
4. Move to an open area after shaking stops.
5. Expect possible aftershocks.
""",

    "Storm": """
🌪 STORM EMERGENCY

1. Stay indoors until the storm passes.
2. Close all windows and doors securely.
3. Stay away from trees and electric poles.
4. Unplug electrical appliances if possible.
5. Follow official weather warnings.
""",

    "Medical": """
🚑 MEDICAL EMERGENCY

1. Call Ambulance (108).
2. Keep the patient calm.
3. Check breathing and pulse.
4. Give first aid only if trained.
5. Do not move seriously injured patients unless necessary.
""",

    "Gas Leak": """
🛢 GAS LEAK EMERGENCY

1. Do NOT switch on electrical appliances.
2. Do NOT light matches or smoke.
3. Turn off the gas supply if it is safe.
4. Open doors and windows for ventilation.
5. Evacuate everyone immediately.
6. Call the gas emergency service.
""",

    "Building Collapse": """
🏢 BUILDING COLLAPSE

1. Move away from the damaged structure immediately.
2. Watch for falling debris.
3. Call emergency rescue services.
4. Do not enter the building again.
5. Help injured people only if it is safe.
6. Wait for rescue personnel.
""",

    "Road Accident": """
🚗 ROAD ACCIDENT

1. Call Ambulance (108) immediately.
2. Ensure your own safety before helping others.
3. Do not move seriously injured victims.
4. Stop traffic if it is safe.
5. Give first aid if trained.
6. Inform the police if necessary.
""",

    "Landslide": """
⛰ LANDSLIDE EMERGENCY

1. Move immediately away from the landslide area.
2. Stay away from steep slopes.
3. Avoid blocked roads and unstable ground.
4. Follow evacuation instructions.
5. Call emergency rescue services if trapped.
""",

    "Electrical Hazard": """
⚡ ELECTRICAL HAZARD

1. Stay away from exposed electrical wires.
2. Do not touch electrical equipment with wet hands.
3. Switch off the main power supply if safe.
4. Keep others away from the hazard.
5. Contact the electricity department immediately.
""",

    "Non-Disaster": """
✅ NO DISASTER DETECTED

No emergency action is required.

Stay safe and have a nice day.
"""
}


def get_guidance(category):
    return guidance.get(
        category,
        "Emergency guidance is currently unavailable."
    )
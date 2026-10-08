package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun VehiclesScreen(onCreate:()->Unit){Card{Column{Text("Vehicles");Text("Domain-specific vehicles workflow");Button(onClick=onCreate){Text("Create")}}}}

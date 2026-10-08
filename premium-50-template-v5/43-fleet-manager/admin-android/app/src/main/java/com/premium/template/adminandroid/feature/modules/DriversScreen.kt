package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun DriversScreen(onCreate:()->Unit){Card{Column{Text("Drivers");Text("Domain-specific drivers workflow");Button(onClick=onCreate){Text("Create")}}}}

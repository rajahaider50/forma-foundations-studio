package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun TicketsScreen(onCreate:()->Unit){Card{Column{Text("Tickets");Text("Domain-specific tickets workflow");Button(onClick=onCreate){Text("Create")}}}}
